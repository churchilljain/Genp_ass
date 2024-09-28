from flask import Flask, request, jsonify
import torch
from flask_cors import CORS
from PIL import Image
import io
import torchvision.transforms as transforms

app = Flask(__name__)
CORS(app)

# Load the scripted model without needing to define the class
device = torch.device('cpu')  # or 'cuda' if available
model = torch.jit.load('./model/brain_tumor_model_scripted.pt', map_location=device)
model.eval()  # Set the model to evaluation mode

CLA_label = {
    0: 'Brain Tumor',
    1: 'Healthy'
}

# Define image preprocessing
def preprocess_image(image_bytes):
    transform = transforms.Compose([
        transforms.Resize((256, 256)),  # Match the training input size
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
    ])
    image = Image.open(io.BytesIO(image_bytes))
    return transform(image).unsqueeze(0)   # Add batch dimension
  # Add batch dimension

@app.route('/')
def index():
    return 'Welcome to the Skin Cancer Detection API!'

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400
    
    # Load the image
    file = request.files['image']
    image_bytes = file.read()

    # Preprocess the image
    image_tensor = preprocess_image(image_bytes).to(device)

    # Get the model's prediction
    with torch.no_grad():
        outputs = model(image_tensor)
        _, predicted = torch.max(outputs, 1)
    
    # Convert prediction to label
    label = predicted.item()
    label_name = CLA_label[label]  # Get the corresponding label name
    return jsonify({'prediction': label, 'label_name': label_name})

if __name__ == '__main__':
    app.run(debug=True)
