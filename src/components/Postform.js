import React,{Component} from 'react'

class Postform extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            body:''
        }
    }

    onChange = (e)=>{
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmit = e=>{
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(post)
        })
        .then(res=>res.json())
        .then(data => console.log(data))
    }


    render(){
        return(
            <div>
                <h1>Add Post</h1>

                <form onSubmit={this.onSubmit} >
                    <div>
                        <label for="">Title</label>
                        <input type="text" name="title" id="" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <div>
                        <label for="">Body</label>
                        <input type="text" name="body" onChange={this.onChange} value={this.state.body} id=""/>
                    </div>
                    <div>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Postform