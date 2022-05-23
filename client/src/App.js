import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/NavBar/NavBar';
import Home from './pages/Home';
import SeeAll from './pages/seeAll'
import Quiz from './pages/Quiz';
import './App.css';

function App() {
  const doggos = [
    {   
      "name": "Lorraine",
        "img": "https://www.battersea.org.uk/sites/default/files/animal_images/00P8e000001F57AEAS.jpeg",
        "ref" : 393339,
        "age" : 4,
        "active" : "Very",
        "kids" : "N",
        "breed": "Rottweiler",
        "sex": "F",
        "others": "N",
        "size": "Large",
        "company": "LOTS",
        "training": "SOME",
        "home": "I prefer to live away from the inner city",
        "about": "Lorraine is a worried and sensitive dog looking for experienced owners. She is unsure of certain aspects of handling and can sometimes get a bit over the top and jump up, but this is due to her being worried and so she needs calm and consistent training to help her with this. Lorraine is affectionate once she knows you and loves games with toys, and food too! She currently knows a sit and down but could easily learn more basic commands when she is settled at home. She would prefer to live as the only dog in her new home as she is anxious at times around some dogs and needs to slowly build her confidence. She does enjoy playing with dogs once she knows them and needs a bit of guidance to be calm and polite."},
    { 
        "name": "Wendy",
        "img": "https://www.battersea.org.uk/sites/default/files/animal_images/00P8e000001F8XtEAK.jpeg",
        "ref" : 393445,
        "age" : 4,
        "active" : "Somewhat",
        "kids" : "Yes - teenagers",
        "breed": "Lurcher",
        "sex": "F",
        "others": "N",
        "size": "Medium",
        "company": "SOME",
        "training": "NO",
        "home": "I prefer to live near green spaces",
        "about": "Wendy is affectionate and active, loves a good walk and to be with people. She enjoys meeting other dogs and is generally friendly and polite, but has shown some chase behaviours towards other dogs and can be controlling when she is off lead - for this reason she will need to be kept on lead and muzzled when on walks. She will need her own secure garden where she can potter for off lead exercise and would enjoy being taken to secure, private dog fields for a good run. She has a friendly character and is very endearing, greeting everyone with a wagging tail and a big smile."},

    { 
        "name": "Grace",
        "img": "https://www.battersea.org.uk/sites/default/files/animal_images/00P8e000001F9vQEAS.jpeg",
        "ref" : 393475,
        "age" : 2,
        "active" : "Very",
        "kids" : "Yes - teenagers",
        "breed": "Mongrel",
        "sex": "F",
        "others": "N",
        "size": "Medium",
        "company": "YES",
        "training": "YES",
        "home": "I prefer to live away from the inner city",
        "about": "Grace has been wonderful to work with, if a bit of hard work, full of beans and a bundle of joy. She does lack in manners with her jumping up but is very into food and will do anything for a treat which makes training fun and easy. Grace has been finding kennel life quite stressful so may require an extended adjustment period into a new home environment and will need someone around most of the day initially. Grace has been a mixture of appeasing, playful and over the top with other dogs, often with lots of vocalisation which can come across as intimidating, so new owners must be prepared to do on going dog socialising training and be confident with this."},

    { 
        "name": "Troy",
        "img": "https://www.battersea.org.uk/sites/default/files/animal_images/00P8e000001EyImEAK.jpeg",
        "ref" : 393501,
        "age" : 14,
        "active" : "No",
        "kids" : "Yes - teenagers",
        "breed": "Jack Russell",
        "sex": "M",
        "others": "Y - dogs and cats",
        "size": "Small",
        "company": "YES",
        "training": "No",
        "home": "I can live anywhere",
        "about": "Little man Troy is an older gent who has found kennelling difficult and is stressed in kennels when on his own, and barks a lot during the day when on his own. He is much better with company and likes his food and absolutely loves tennis balls, and could play all day! He has shown to be friendly and independent with dogs and might be able to live with one if the right match.Troy need a quiet retirement home where he can relax and we cant wait to see him living his best life in his forever home."}    
  ]

  const ourCats = [
    { 
        "name": "Nelly",
        "img": "https://www.battersea.org.uk/sites/default/files/animal_images/00P8e000001EiyCEAS.jpeg",
        "ref" : 392953,
        "age" : 10,
        "active" : "No",
        "kids" : "Yes - teenagers",
        "breed": "Domestic short-hair",
        "sex": "F",
        "others": "No",
        "size": "Small",
        "company": "No",
        "training": "No",
        "home": "I prefer to live away from the inner city",
        "about":"Nelly is a very sweet soul who can come across shy when meeting new people, but she is very quick to warm up with a few words of encouragement and treats. She will greet known people for fuss with a happy tail and sweet chirrups. Our girl wants nothing more than to laze the days away on her favourite persons lap, enjoying lots of fuss. Nelly will need some access to a garden to stretch her legs out in the warmer weather."},

    { 
        "name": "Cheese Toastie",
        "img": "https://www.battersea.org.uk/sites/default/files/animal_images/00P8e000001F0hDEAS.jpeg",
        "ref" : 393671,
        "age" : 2,
        "active" : "No",
        "kids" : "Yes - teenagers",
        "breed": "Orange",
        "sex": "M",
        "others": "No",
        "size": "Small",
        "company": "No",
        "training": "No",
        "home": "I can live anywhere",
        "about":"Cheese Toastie is a super lively and friendly little chap, he rolls about purring while getting strokes and seems to love everyone! When playing with his toys he throws himself around after them with seemingly boundless energy, then settles down for a cosy nap curled up on his blankets! Cheese Toastie will need cat flap access to a garden so he can expend his excess energy when the mood strikes and feel the sun on his fur!"}

    ]

  const [dogs, setDogs] = useState(doggos)
  const [cats, setCats] = useState(ourCats)


  return (
   <>
      <Nav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/dogs' element={<SeeAll animals={dogs} /> } />
          <Route path='/cats' element={<SeeAll animals={cats} />} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
   
   
   </>
  )
}

export default App;
