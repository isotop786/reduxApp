import React,{Component,Fragment} from 'react'

class Posts extends Component{

    componentWillMount(){
        console.log("mounted")
    }

    render(){
        return(
            <div>
                <h1>Posts</h1>
            </div>
        )
    }
}

export default Posts;