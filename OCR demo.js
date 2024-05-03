import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

function OCRDemo() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [filename, setFilename] = useState('');

  const handleImageChange = async () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
      quality: 0.8,
    };
      
      launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const fileName = response.assets[0].fileName;
        const uri = response.assets[0].uri;
        setFilename(fileName);
        setImage(uri);
        console.log('Selected image: ', uri);
      }
    });
  };

const getFileFormat = (filename) => {
    const parts = filename.split('.');
    const extension = parts[parts.length - 1].toLowerCase();

    const formatMap = {
      jpg: 'JPEG',
      jpeg: 'JPEG',
      png: 'PNG',
      gif: 'GIF',
      bmp: 'BMP',
      svg: 'SVG',
      pdf: 'PDF',
      doc: 'DOC',
      docx: 'DOCX',
    };

    return formatMap[extension] || '';
  };

 const handleOCR = async () => {
    if (!image) {
      alert('Please select an image first.');
      return;
    }

    setLoading(true);

    const formatType = getFileFormat(filename);

    // Convert image to base64
    const base64Image = await fetch(image).then((response) => response.blob());
    const content = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64data = reader.result.split(',')[1];
        resolve(base64data);
      };
      reader.onerror = reject;
      reader.readAsDataURL(base64Image);
    });

 const requestData = {
      mimeType: formatType,
      languageCodes: ['*'],
      model: 'page',
      content: content,
    };

    console.log('Image data:', requestData);

    try {
      const response = await fetch('http://192.168.1.10:4000/recognizeText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Api-Key AQVNzgAdMKmYms98OVk9SexUKLAc3aUXFLjUOKi3',
          'x-data-logging-enabled': 'true',
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      setLoading(false);
      console.log('Response data:', data);
      const fullText = data?.result?.textAnnotation?.fullText;
      setText(fullText || 'No text detected.');
    } catch (error) {
      setLoading(false);
      console.error('Error performing OCR:', error);
    }
  };
