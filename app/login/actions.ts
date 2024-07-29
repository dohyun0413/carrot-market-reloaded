"use server"

export async function handleForm(prevState : any, formdata : FormData) {
    await new Promise(resolve => setTimeout(resolve,5000));
    //console.log(formdata.get("email"), formdata.get("password"))
    //redirect("/"); // action 실행되면 홈페이지 경로 이동해주는 기능
    return {
        errors : ["wrong password", "password too short"]
    }
  }