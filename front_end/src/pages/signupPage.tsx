import { useState } from 'react'



function SignupPage() {
  const [count, setCount] = useState(0)
  const [firstName, setFirstName] = useState(0)
  const [lastName, setLastName] = useState(0)
  const [zipCode, setZipCode] = useState(0)


  return (
    <>
        <p>hello</p>
        <textarea name="inputFirstName" rows={1} cols={40}/>
        <textarea name="inputSecondName" rows={1} cols={40}/>
        <div>        <textarea name="inputZipCode" rows={1} cols={10}/>
</div>


    </>
  )
}

export default SignupPage
