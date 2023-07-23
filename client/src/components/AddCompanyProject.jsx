import axios from "axios";
import { useState } from "react"
import Cookies from "js-cookie";
import './AddCompanyProject.scss';
import ip from "./ip";

export default function AddCompanyProject() {
    const [info, setinfo] = useState({
        comapny: "",
        created_at: "",
        description: "",
        duration: "",
        employees_required: "",
        image: "",
        pay: "",
        skills_req: "",
        time_tobe_dedicated: "",
        title: "",
        updated_at: "",
    });

    async function handle(e) {
        e.preventDefault();
        const TOKEN = Cookies.get('accesstoken');
        try {
            const data = await axios.post(`http://${ip}/api/api/projects/`, {
                comapny: info.comapny,
                created_at: info.created_at,
                description: info.description,
                duration: info.duration,
                employees_required: info.employees_required,
                image: info.image,
                pay: info.pay,
                skills_req: info.skills_req,
                time_tobe_dedicated: info.time_tobe_dedicated,
                title: info.title,
                updated_at: info.updated_at,
            }, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    function checkChange(e) {
        setinfo((info) => ({
            ...info,
            [e.target.name]: e.target.name === "comapny" || e.target.name === "employees_required" ? parseInt(e.target.value) : e.target.value,
        }))
        console.log(info);
    }
    return (
        <>
            <div className="main_emp_project">
                <div>
                    <div className="header">
                        <h3>Add Projects</h3>
                        <div className="header_btn">
                            <button>Hello</button>
                        </div>
                    </div>
                </div>
                <div>
                    <form onSubmit={e => handle(e)}>
                        <div>
                            <input onChange={e => checkChange(e)} type="number" name="comapny" id="comapny" placeholder="company" />
                            <input onChange={e => checkChange(e)} type="text" name="created_at" id="created_at" placeholder="created_at" />
                            <input onChange={e => checkChange(e)} type="text" name="description" id="description" placeholder="description" />
                            <input onChange={e => checkChange(e)} type="text" name="duration" id="duration" placeholder="duration" />
                            <input onChange={e => checkChange(e)} type="number" name="employees_required" id="employees_required" placeholder="employees_required" />
                            <input onChange={e => checkChange(e)} type="text" name="image" id="image" placeholder="image" />
                        </div>
                        <div>
                            <input onChange={e => checkChange(e)} type="text" name="pay" id="pay" placeholder="pay" />
                            <input onChange={e => checkChange(e)} type="text" name="skills_req" id="skills_req" placeholder="skills_req" />
                            <input onChange={e => checkChange(e)} type="text" name="time_tobe_dedicated" id="time_tobe_dedicated" placeholder="time_tobe_dedicated" />
                            <input onChange={e => checkChange(e)} type="text" name="title" id="title" placeholder="title" />
                            <input onChange={e => checkChange(e)} type="text" name="updated_at" id="updated_at" placeholder="updated_at" />
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}