import React , {Component } from 'react';
import AUX from '../../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import Select from 'react-select';
// import "./Ui_buttons.css"
//import "../scrollPage.css"
//import ImageUpload from "../UiElements/Testing"
import { useState, useEffect } from 'react';
import products from "./data"
import Test from "./tests"
//import inputIMG from "./Apple-AirPods-kit1s.jpg"
//import ScrollPage from './scrollPage';
//import ImageUpload from '../UiElements/Testing';
import Parse from 'parse';

const User_Account = ({props}) => {
    const [productsState, setProductsState] = useState(products);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [input, setInput] = useState(selectedProduct);

    useEffect(() => {
        setInput(selectedProduct);
      }, [selectedProduct]);
    
      const saveProduct = (e, productInput) => {
        e.preventDefault();
        const productIdx = productsState.findIndex(
          (element) => element.id === productInput.id
        );
        const newProduct = [...productsState];
        imagePreviews.length > 0
      ? (newProduct[productIdx] = { ...productInput, img: imagePreviews[0] })
      : (newProduct[productIdx] = productInput);
        setProductsState(newProduct);
        setInput({ title: "", account: "", status: "", date: "", img: ""}); // Clear the input fields
    //setSelectedProduct({}); // Clear the selected product
        //console.log(newProduct[productIdx].img);
        //console.log(imagePreviews);
      };
    
      const handleChange = (field, value) => {
        setInput({ ...input, [field]: value });
      };

      const removeProduct = (idx) => {
        const newProduct = [...productsState];
        newProduct.splice(idx, 1);
        setProductsState(newProduct);
      };

      const addProduct = () => {
        setProductsState([
          ...productsState,
          ...[
            {
              id: productsState.length + 1,
              title: "Untitled",
              account: "Unknown",
              status: "",
              img: '',
              date: ''
            }
          ]
        ]);
      };


      //fast scroll function
  const handleScrollClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  //Image Upload

  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [imageNames, setImageNames] = useState([]);

  const handleUploadImage = (event) => {
    const files = event.target.files;
    const previews = [];
    const names = [];
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        previews.push(e.target.result);
        names.push(file.name);
        setImageFiles((prevFiles) => [...prevFiles, file]);
        setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
        setImageNames((prevNames) => [...prevNames, ...names]);
      };
      reader.readAsDataURL(file);
    });
    // console.log(imageNames);
    // console.log(names);
    // console.log(files[0].name);
  };

  const handleDeleteImage = (index) => {
    const files = [...imageFiles];
    const previews = [...imagePreviews];
    const names = [...imageNames];
    files.splice(index, 1);
    previews.splice(index, 1);
    names.splice(index, 1);
    setImageFiles(files);
    setImagePreviews(previews);
    setImageNames(names);
  };



  //parseSDK

  Parse.initialize("FortCore", "abc FortCore 234");
  Parse.serverURL = 'https://test.fortcoretech.com/api/';

  useEffect(() => {
        // Create an instance of the Parse.Object class
        const MyClass = Parse.Object.extend('ExistingClass');
        const myObject = new MyClass();
    
        // Create an array of objects and set the values of each property
        const myArray = products;
      console.log(myArray);
      myObject.set('productsArray', myArray)
      myObject.save()
            .then(savedObject => {
              console.log(`Saved object with name ${savedObject.get('productsArray')}`);
            })
            .catch(error => {
              console.error(`Error saving object: ${error}`);
            });
        // Loop through the array and set the values of each property on the Parse object
        // myArray.forEach(obj => {
        //   myObject.set('name', obj.title);
        //   myObject.set('name', obj.title);
        //   myObject.set('testArray', [{name: 'Matt Ken', Age: 6, occupation: "Trading"}]);
        //   myObject.set('age', obj.price);
        //   myObject.set('productTest', obj[0]);
          
        //   //console.log(myObject);
        //   //console.log(obj);
        //   myObject.save()
        //     .then(savedObject => {
        //       console.log(`Saved object with name ${savedObject.get('name')}`);
        //     })
        //     .catch(error => {
        //       console.error(`Error saving object: ${error}`);
        //     });
        // });
      }, []);

      // const getSavedItems = () => {
      //   const savedItems = localStorage.getItem("products");
      //   if (savedItems) {
      //     return JSON.parse(savedItems);
      //   }
      //   return [];
      // };
  
      // const saveItems = (items) => {
      //   localStorage.setItem("products", JSON.stringify(items));
      // };

      // useEffect(() => {
      //   const savedItems = getSavedItems();
      //   setProductsState(savedItems);
      // }, []);
      
 
    return(
           <AUX>
            <div className="page-content-wrapper">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        {productsState.map((product, idx) => {
                                            return (
                                                <div className="col-md-6 col-lg-3" key={product.id}>
                                                    <div className="product-list-box">
                                                        <a href="javascript:void(0);">
                                                            <img src={product.img} style={{height: "272.25px"}} className="img-fluid" alt="work-thumbnail" />
                                                        </a>
                                                        <div className="detail">
                                                            <h4 className="font-16"><a href="" style={{ textAlign: "center" }} className="text-dark">{product.title}</a></h4>
                                                            <h4 className="font-16"><a href="" style={{ textAlign: "center" }} className="text-dark"> {product.account}</a></h4>
                                                            <p style={{ display: "grid", justifyContent: "center" }}><button onClick={() => {setSelectedProduct(product); handleScrollClick();}} href="#" className="btn btn-success btn-sm">View Full Profile</button></p>
                                                            <p style={{ display: "grid", justifyContent: "center" }}><button onClick={() => removeProduct(idx)} href="#" className="btn btn-dark btn-sm">Delete this Profile</button></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p style={{ display: "grid", justifyContent: "center" }}><button onClick={addProduct} href="#" className="btn btn-success btn-sm">Add User Profile</button></p>
            </div>
      <Test input = {input} handleChange = {handleChange} saveProduct = {saveProduct} imagePreviews = {imagePreviews} handleDeleteImage = {handleDeleteImage} handleUploadImage = {handleUploadImage} imageNames = {imageNames} />
      </AUX>
        );
    }


export default User_Account;   