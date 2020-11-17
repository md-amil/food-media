import React ,{useState}from 'react';
import { StyleSheet} from 'react-native';
import Carousel from './app/components/Carousel';
import Screen from './app/components/Screen';

export default function App() {
  // if you wanna use carousel  without image picker just remove  "{uri:false}"
  const [imageUris,setImageUris] = useState([{uri:false}])
  
  
  const handleAdd = uri =>{
      setImageUris([{uri},...imageUris])
  }
  
  const handleRemove = uri =>{
      const newUri = imageUris.filter(imageUri => imageUri.uri !== uri)
      console.log(newUri)
      setImageUris(newUri)
  }
  
  return (
    <Screen>
          <Carousel 
              imageUris = {imageUris}
              onRemoveImage = {handleRemove}
              onAddImage = {handleAdd}
          />
          {/* <Carousel/> */}
    </Screen>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
