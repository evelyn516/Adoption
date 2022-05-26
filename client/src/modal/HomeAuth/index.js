import React, {useState} from 'react';
import './style.css'

function Modal({toggle,setModal, api}) {
    const [refresh, setRefresh] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null);
    let imageUrl;

    async function readFile(file) {
        const reader = new FileReader();

        return new Promise(resolve => {
            reader.addEventListener("load", function () {
                // convert image file to base string
                resolve(reader.result);
              }, false);
            if (file) {
                reader.readAsDataURL(file);
            }
        })
    }

    const uploadImage = async file => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'kv5vzhlw')

        const options = {
            method: 'POST',
            body: formData
        }
        await fetch('https://api.cloudinary.com/v1_1/dcf14da2x/image/upload', options)
            .then(res => res.json())
            .then(res => imageUrl=(res.url))
            .catch(err => console.log(err));
    }


    const handleSubmit = async e => {
        e.preventDefault();
        let username = localStorage.getItem('username');
        const b = e.target
        console.log(b.image)
        console.log(b.image.files[0])
        // console.log(imgUrl)
        // imgUrl = await readFile(b.image.files[0])
        // const myImage = cld.image(imgUrl);
        // console.log(myImage)
        // console.log(imgUrl)
        // console.log(imgUrl)
        // console.log(URL.createObjectURL(b.image.files[0]))
        // urlurl = URL.createObjectURL(b.image.files[0])
        // console.log(urlurl)
        // console.log(selectedFile)
        await uploadImage(b.image.files[0])
        console.log(imageUrl)
        const options = {
            method : 'POST', 
            body: JSON.stringify({
                name: b.name.value,
                description: b.desc.value,
                age: b.age.value,
                image: imageUrl,
                q1: b.q1.value,
                q2:b.q2.value,
                q3:b.q3.value,
                q4:b.q4.value,
                q5:b.q5.value,
                q6:b.q6.value,
                q7:b.q7.value,
                q8:b.q8.value,
                username: username
            }),
            headers: {'Content-Type': 'application/json'}, withCredentials: true
        }
        await fetch(`${api}posts/`, options)
        console.log('posted')
        setRefresh(!refresh)
    }

    // const preview = async e => {
    //     console.log(e.target.files[0])
    //     let previewUrl = await readFile(e.target.files[0])
    //     setSelectedFile(previewUrl)
    // }

  return (
      <>
    <div style={{display: !toggle ? 'None' : 'Block'}} >
        <form className='addPostPage' onSubmit={handleSubmit} enctype="multipart/form-data">
            <div className='postContainer'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' placeholder='e.g. Ben'/>

            <label htmlFor='age'>Age</label>
            <input type='number' name='age' id='age' placeholder='Enter age..'/>

            <label htmlFor='description'>Description</label>
            <textarea rows='4' name='desc' cols='40' id='description' placeholder='Description...' />

          
            <label htmlFor='q1'>Animal Species</label>

            <select name="q1" id="q1">
                {/* # What kind of animal are you looking for? */}
                <option >Cat</option>
                <option >Dog</option>
                <option >I don't mind</option>
            </select>

            <label htmlFor='q2'>Size</label>
            <select name="q2" id="q2">
                {/* # Big or Small? */}
                <option >Small</option>
                <option >Medium</option>
                <option >Big</option>
                <option >Size doesn't matter</option>
            </select>

            <label htmlFor='q3'>Activity Requirement</label>
            <select name="q3" id="q3">
                {/* # Are you an active person */}
                <option >Couch Potato</option>
                <option >Reasonably</option>
                <option >Very</option>
            </select>

            <label htmlFor='q4'>Can this animal be around children?</label>
            <select name="q4" id="q4">
                {/* # Do you have any children at home  */}
                <option >Yes - Young Children</option>
                <option >Yes - Teenagers</option>
                <option >No - Thank God</option>
            </select>

            <label htmlFor='q5'>Can this animal be around other pets?</label>
            <select name="q5" id="q5">
                {/* Do you have other pets */}
                <option >Yes - A Cat</option>
                <option >Yes - A Dog</option>
                <option >Sadly not</option>
            </select>

            <label htmlFor='q6'>Does this animal require a garden?</label>
            <select name="q6" id="q6">
                {/* Do you have fenced in garden */}
                <option >Yes</option>
                <option >No - But there is a green space close by</option>
                <option >No - I live in the city</option>
            </select>

            <label htmlFor='q7'>How much time would the pet have to spend alone?</label>
            <select name="q7" id="q7">
                {/* How much time will your pet have to spend alone */}
                <option >None - wfh</option>
                <option >Some - But I can arrange care</option>
                <option >Reasonable - I work a lot</option>
            </select>

            <label htmlFor='q8'>Would the pet require extra training?</label>
            <select name="q8" id="q8">
                {/* Would you be able to take a pet that needs extra training */}
                <option >Nope</option>
                <option >Minor</option>
                <option >Some</option>
                <option >I like a challenge</option>
            </select>
            
            <div class="file-input">
                <label htmlFor='file'>Upload Pet Image</label>
                <input type="file" id="file" class="file" name='image' 
                accept="image/*" required/>
            </div>
            

            <button type="submit" onClick={()=>setModal(prevState=>!prevState)}>Add Animal</button>
            </div>
        </form>
    </div>
    


    </>
  )
}

export default Modal
