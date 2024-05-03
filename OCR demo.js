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
