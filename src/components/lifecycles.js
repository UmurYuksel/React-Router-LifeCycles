import React, { PureComponent } from 'react';


class Life extends PureComponent {
    //1 get defaul props

    //2 set default state
    state = {
        title: 'My Title'
    }

    // 3 before render 
    // componentWillMount() {
    //     console.log('3 before render')

    //     this.setState({
    //         title: 'This a title'
    //     })
    // }

    //5 After render
    // componentDidMount() {
    //     console.log('after render')
    // }


    // //This will be fired when the page recognize that there is an update in the page
    // componentWillUpdate() {
    //     console.log('I changed something')
    // }

    // //This will be fired when the page recognize that there is an update in the page
    // componentDidUpdate() {
    //     console.log('I changed something and did update')
    // }

    // //by using this we can block updates => if it returns true then the update can be done but if false we can keep the old version of the value
    // shouldComponentUpdate(nextProps, nextState) {
    //   if(this.state.title==='something else'){
    //         return false;
    //   }

    //     return true;
    // }

    // //this function will not work with default props but when we reload the page we actually passing the default props to the page again so then this function will be fired.C
    // componentWillReceiveProps() {
    //     console.log('Test')
    // }

    // //when unmount the component this will be triggered.
    // //for example if I'm in life.js then I go to profile.js, this will be triggered.
    // componentWillUnmount(){

    // }
    // //4 render jsx
    render() {

        console.log('Im between')
        return (
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={() => this.setState({ title: 'state is changed' })}>X</div>

            </div>
        )
    }


}

export default Life;