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
