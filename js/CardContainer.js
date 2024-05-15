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
