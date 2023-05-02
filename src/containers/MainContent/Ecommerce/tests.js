import React from 'react'
//import ImageUpload from "../UiElements/Testing"
import { useState, useEffect } from 'react';

const Tests = ({ input, handleChange, saveProduct, handleDeleteImage, handleUploadImage, imagePreviews, imageNames }) => {
    //console.log(input.img);
    //console.log(newProduct[productIdx]);
    console.log(imagePreviews);
    console.log(handleUploadImage)
    
      return (
          <div>
              <div className="page-content-wrapper  cart-overlay">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-12">
                              <div className="card m-b-20">
                                  <div className="card-body">

                                      <h4 className="mt-0 header-title">Basic Information</h4>
                                      <p className="text-muted m-b-30 font-14">Fill all information below</p>

                                      <form>
                                          <div className="row">
                                              <div className="col-sm-6">
                                                  <div className="form-group">
                                                      <label for="productname">Name</label>
                                                      {/* <input id="productname" name="productname" value={cartItems[1].price} type="text" className="form-control" /> */}
                                                     <input id="productname" name="productname" onChange={(e) => handleChange("title", e.target.value)}  value={input.title} type="text" className="form-control" />
                                                  </div>
                                                  <div className="form-group">
                                                      <label for="manufacturername">Account</label>
                                                      <input id="productname" name="productname" onChange={(e) => handleChange("account", e.target.value)} value={input.account} type="text" className="form-control" />
                                                  </div>
                                              </div>

                                              <div className="col-sm-6">
                                                  <div className="form-group">
                                                  <img style={{width: "165.75px"}} src= {input.img} alt="" />
                                                      {/* <label for="productdesc">Product Description</label>
                                                      <textarea className="form-control" id="productdesc" rows="1"></textarea> */}
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="row">
                                              <div className="col-sm-6">
                                                  <div className="form-group">
                                                      <label for="manufacturerbrand">Date Joined</label>
                                                      <input id="manufacturerbrand" name="manufacturerbrand" onChange={(e) => handleChange("date", e.target.value)} value={input.date} type="text" className="form-control" />
                                                  </div>
                                                  <div className="form-group">
                                                      <label for="price">Status</label>
                                                      <input id="price" name="price" value={input.status} onChange={(e) => handleChange("status", e.target.value)} type="text" className="form-control" />
                                                  </div>
                                                  
                                                  {/* <img src= {input.img} alt="" /> */}
                                                  <div className="form-group">
                                                      <label className="control-label">Category</label>
                                                      <select className="form-control select2">
                                                          <option>Select</option>
                                                          <option value="AK">Gadgets</option>
                                                          <option value="HI">Home Appliances</option>
                                                          <option value="HI">Vehicles</option>
                                                          <option value="HI">Wears</option>
                                                          <option value="HI">Kitchen Utensils</option>
                                                          <option value="HI">Clothing Accessories</option>
                                                      </select>
                                                  </div>
                                                  <div className="form-group">
                                                      <label className="control-label">Features</label>
                                                  </div>
                                              </div>

                                              <div className="col-sm-6">
                                                  <div className="form-group">
                                                      <label>Product Image</label> <br />
                                                      <p>Upload Image</p>
      <form>
        <input type="file" accept="image/*" multiple onChange={handleUploadImage} />
      </form>
      {imagePreviews.map((preview, index) => (
        <div key={index}>
          <h2>Image Preview:</h2>
          <img src={preview} alt={`Preview ${index}`} width={200} height={200} />
          <p>{imageNames[index]}</p>
          <button type='button' onClick={() => handleDeleteImage(index)}>Delete</button>
        </div>
      ))}
                                                  </div>
                                              </div>
                                          </div>

                                          <button type="button" onClick={(e) => saveProduct(e, input)} className="btn btn-success waves-effect waves-light">Save Changes</button>
                                          <button type="submit" className="btn btn-secondary waves-effect">Cancel</button>
                                          <div className="">
                                          </div>
                                      </form>

                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
      
          </div>
      );
}

export default Tests