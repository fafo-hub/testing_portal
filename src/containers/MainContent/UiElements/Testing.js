import React, { useState } from 'react';

const ImageUpload = (handleDeleteImage, handleUploadImage, imagePreviews) => {
  // const [imageFiles, setImageFiles] = useState([]);
  // const [imagePreviews, setImagePreviews] = useState([]);
  // const [imageNames, setImageNames] = useState([]);

  // const handleUploadImage = (event) => {
  //   const files = event.target.files;
  //   const previews = [];
  //   const names = [];
  //   Array.from(files).forEach((file) => {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       previews.push(e.target.result);
  //       names.push(file.name);
  //       setImageFiles((prevFiles) => [...prevFiles, file]);
  //       setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
  //       setImageNames((prevNames) => [...prevNames, ...names]);
  //     };
  //     reader.readAsDataURL(file);
  //   });
  // };

  // const handleDeleteImage = (index) => {
  //   const files = [...imageFiles];
  //   const previews = [...imagePreviews];
  //   const names = [...imageNames];
  //   files.splice(index, 1);
  //   previews.splice(index, 1);
  //   names.splice(index, 1);
  //   setImageFiles(files);
  //   setImagePreviews(previews);
  //   setImageNames(names);
  // };
  console.log(imagePreviews);
  console.log(handleUploadImage);

  return (
    <div>
      <p>Upload Image</p>
      <form>
        <input type="file" accept="image/*" multiple onChange={handleUploadImage} />
      </form>
      {/* {imagePreviews.map((preview, index) => (
        <div key={index}>
          <h2>Image Preview:</h2>
          <img src={preview} alt={`Preview ${index}`} width={200} height={200} />
          <p>{imageNames[index]}</p>
          <button onClick={() => handleDeleteImage(index)}>Delete</button>
        </div>
      ))} */}
    </div>
  );
};

export default ImageUpload;








//Class Components

// import React, { Component } from 'react';

// class ImageUpload extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       imageFiles: [],
//       imagePreviews: [],
//     };
//   }

//   handleUploadImage = (event) => {
//     const files = event.target.files;
//     const imagePreviews = [];
//     Array.from(files).forEach((file) => {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         imagePreviews.push(e.target.result);
//         this.setState((prevState) => ({
//           imageFiles: [...prevState.imageFiles, file],
//           imagePreviews: [...prevState.imagePreviews, ...imagePreviews],
//         }));
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   render() {
//     const { imagePreviews } = this.state;
//     return (
//       <div>
//         <p>Upload Image</p>
//         <form>
//           <input type="file" accept="image/*" multiple onChange={this.handleUploadImage} />
//         </form>
//         <div className=" row img-upload">
//           <div className="col-sm-12 img-upload-wrapper">
//             {imagePreviews.map((preview, index) => (
//               <div key={index}>
//                 <h2>Image Preview:</h2>
//                 <img src={preview} alt={`Preview ${index}`} width={200} height={200} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ImageUpload;
