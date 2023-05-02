import React , {Component } from 'react';
import AUX from '../../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { ProgressBar  } from 'react-bootstrap';
import { Progress } from 'reactstrap';
import Sponsored_Lease from '../sponsored_lease/Sponsored_Lease'
import { useState, useEffect } from 'react';
import products from './database';
import Edit from './Edit';

const Quick_Lease = ({props}) => {


    // constructor(props) {
    //     super(props);
     
    //     this.state = {
    //       simple:80, simple68:68, simple37:37, simple72:72,
    //       showContent: false,
    //       content: '<h2> Hello </h2>' // Store the content to be displayed
    //     };
    //     this.showContent = false
    //     this.Godahbeg = this.Godahbeg.bind(this)
    //   }

    //   const Godahbeg = () =>  {
    //     console.log("God please");
    //   }
    //   handleIconClick = () => {
    //     this.setState({ showContent: !this.state.showContent });
    //   }
 
//render(){

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
        setInput({ category: "", type: "", duration: "", delivery: "", lease: "", price: "", description: ""}); // Clear the input fields
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
              lease: "Quick Lease",
              category: "Untitled",
              type: "Untitled",
              description: "Nil",
              price: '',
              date: 'Nil',
              delivery: 'Nil'
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
    


    return(
           <AUX>
		   <div className="page-content-wrapper">
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-12">
                                    <div className="card m-b-20" style={{marginBottom: "0"}}>
                                        <div className="card-body">
                                            <table id="datatable" className="table table-striped dt-responsive nowrap table-vertical" width="100%" cellspacing="0">
                                                <thead>
                                                <tr style={{textAlign: "center"}}>
                                                    <th>Lease Type</th>
                                                    <th>Product Category</th>
                                                    <th>Product Type</th>
                                                    <th>Product Description</th>
                                                    <th>Product Price</th>
                                                    <th>Preferred Delivery Type</th>
                                                    <th>Action</th>
                                                    {/* <th>Action</th> */}
                                                </tr>
                                                </thead>
                                                <tbody style={{textAlign: "center"}}>
                                                    {productsState.map((product, idx) => {
                                                        return (
                                                            <tr>
                                                              <th> {product.lease} </th>
                                                    <th> {product.category} </th>
                                                    <th>{product.type}</th>
                                                    <th>{product.description}</th>
                                                    <th>{product.price.toLocaleString()}</th>
                                                    <th> {product.delivery} </th>
                                                    <td>
                                                <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i onClick={() => { setSelectedProduct(product); handleScrollClick(); }} className="mdi mdi-pencil font-18"></i></a>
                                                <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i onClick={() => {removeProduct(idx)}} className="mdi mdi-close font-18"></i></a>
                                            </td>  
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p style={{ display: "grid", justifyContent: "center" }}><button onClick={addProduct} href="#" className="btn btn-success btn-sm">Add to Quick Lease</button></p>
                        </div>
                       
                    </div>
                    <Edit input = {input} handleChange = {handleChange} saveProduct = {saveProduct} imagePreviews = {imagePreviews} handleDeleteImage = {handleDeleteImage} handleUploadImage = {handleUploadImage} imageNames = {imageNames} />
           </AUX>
        );
    
}

export default Quick_Lease;   