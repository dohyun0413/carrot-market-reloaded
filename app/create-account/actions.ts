"use server"
import {z} from "zod";

function checkUsername2(username : string){
    return !username.includes("potato")
}

const checkUsername = (username : string) => !username.includes("potato")
const checkPasswords = ({password, confirm_password} : {password:string, confirm_password:string}) => password === confirm_password;

const formSchema = z.object({
    username: z.string({
        invalid_type_error: "Username must be a string!", // 초기설정 자체가 잘못된 경우 username : formData.get("username") : ok / username : 1 : error
        required_error: "where is my Username???" // username : formData.get("username") : ok / usernameeee : formData.get("username") : error
    }).min(3, "Way too Short!!").max(10, "That is too long!!").refine(checkUsername, "No potatoes allowed"),
    email: z.string().email(),
    password: z.string().min(10),
    confirm_password: z.string().min(10)
}).refine(checkPasswords, {
    message : "Both paswords should be the same!",
    path : ["confirm_password"],
});

export async function createAccount(prevState:any, formData:FormData){
    const data = {
        username : formData.get("username"),
        email : formData.get("email"),
        password : formData.get("password"),
        confirm_password : formData.get("confirm_password")
    };

    const result = formSchema.safeParse(data);
    if(!result.success)
    {
        return result.error.flatten();
    }
}