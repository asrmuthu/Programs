import React from 'react'
import User from './User'


const Usercard = () => {
  const profiles = [
    { name : "Muthupandi Raj",
      city : "Theni",
      role : "Lead Developer",
      skills: ["React","Javascript","css","HTML","Node","XSLT","C# .NET","SQL"],
      online: true,
      image:"images/1.jpg",
    },
    {
      name : "Mihran",
      city : "Coimbatore",
      role : "Manager",
      skills: ["HTML","Javascript","css","React","Node","JAVA","C# .NET","SQL"],
      online: false,
      image:"images/2.jpg",
    },
    {
      name : "Renuka",
      city : "Chennai",
      role : "Developer",
      skills: ["React","Javascript","css","HTML","Node","XSLT","C# .NET","SQL"],
      online: true,
      image:"images/3.jpg",
    },
  ]
  return (
    <>
    {profiles.map((profile, index) => (<User key={index} 
    name={profile.name} 
    city={profile.city}
    role={profile.role}
    skills={profile.skills}
    online={profile.online}
    image={profile.image}
    />))}
    </>
    // <User name="Muthupandi Raj" city ="Theni" role ="Lead Developer" skills = {["React","Javascript","css","HTML","Node","XSLT","C# .NET","SQL"]} online = {true} image = "images/1.jpg"/>
  )
}

export default Usercard