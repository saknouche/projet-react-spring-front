import React, { useState } from 'react';

const Post = () => {
    const [state, setState] = useState({
        selectedFile: ""
    })
    console.log(state)
    const onFileChangeHandler = (e) => {
        e.preventDefault();
        setState({
            selectedFile: e.target.files[0]
        });
        const formData = new FormData();
        formData.append('file', state.selectedFile);
        console.log(formData.get('file'))
        // fetch('http://localhost:8080/upload', {
        //     method: 'post',
        //     body: formData
        // }).then(res => {
        //     if(res.ok) {
        //         console.log(res.data);
        //         alert("File uploaded successfully.")
        //     }
        // });
    };



   return (
      <>
         <div className='container'>
            <div className='row'>
               <div className='col-md-6'>
                  <div className='form-group files color'>
                     <label>Upload Your File </label>
                     <input
                        type='file'
                        className='form-control'
                        name='file'
                        onChange={onFileChangeHandler}
                     />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Post;
