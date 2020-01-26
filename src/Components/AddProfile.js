import React, { Component } from 'react'
import axios from 'axios'
import Header from '../UpAndDown/Header'
import GoogleMapReact from 'google-map-react';
import {mdiMapMarker} from '@mdi/js'
import Icon from '@mdi/react'


const AnyReactComponent = ({ text }) => <div>{text}</div>;


export class AddProfile extends Component {
    static defaultProps = {
        center: {
          lat: 20,
          lng: 78,
        },
        zoom: 2
      };
    
    constructor(){
        super();
        this.state = {
              displayMenu: false,
              name:'',
              address:'',
              ngoName:'',
              lastName:'',
              typeOfNeedy:'',
              city:'',
              state:'',
            //   center: {
            //     lat:0,
            //     lng: 0,
            //   },
            };
       
         this.showDropdownMenu = this.showDropdownMenu.bind(this);
         this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this)
       };

       handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }


  

  componentDidMount() {


 

    var body = {
        name: this,
        userEmail: 'Flintstone@gmail.com'
    }
    
    axios({
        method: 'post',
        url: 'localhost:8000/blog/needyr',
        data: body
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  handleChangeCity(e){
      this.setState({city:e.target.value})
    if(e.target.value=='Mumbai' || e.target.value=='Pune' || e.target.value=='Nagpur' || e.target.value=='Thane' || e.target.value=='Ratnagiri'){
        this.setState({state:'Maharashtra'})
        this.setState({lat:21.1458})
        this.setState({lng:79.0882})
    }
    if(e.target.value=='Jaipur' || e.target.value=='Jodhpur' || e.target.value=='Bikaner' || e.target.value=='Ajmer'){
        this.setState({state:'Rajasthan'})
        this.setState({lat:26.2389})
        this.setState({lng:73.0243})
        // window.location.reload();
    }
  }
  handleChangeType(e){
    this.setState({typeOfNeedy:e.target.value});
    if(e.target.value=="Orphan" && this.state.state=='Maharashtra'){
        this.setState({ngoName:'Sneha Sadan Orphanage'})
    }
    if(e.target.value=="Orphan" && this.state.state=='Rajasthan'){
        this.setState({ngoName:'Sneha Sadan Orphanage'})
    }
    if(e.target.value=="Widow" && this.state.state=="Maharashtra"){
        this.setState({ngoName:'Little Sisters of The Poor Home For Aged'})
    }
    if(e.target.value=="Widow" && this.state.state=="Rajasthan"){
        this.setState({ngoName:'Andhakshi Ashram'})
    }
    if(e.target.value=="Old Age"){
        this.setState({ngoName:''})
    }
    if(e.target.value=="Poverty"){
        this.setState({ngoName:''})
    }

  }
  

    render() {
        return (
            <div>
          <Header/>
    
        <section class="section pb-0">
          
            <div class="container mt-100 mt-60">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
                        <div class="pt-5 pb-5 p-4 bg-light shadow rounded">
                            <h4>Help the Needy !</h4>
                            <h6>Add the details of person in need...</h6>
                            <div class="custom-form mt-4">
                                <div id="message"></div>
                                <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group position-relative">
                                                <label> Name <span class="text-danger">*</span></label>
                                                <i class="mdi mdi-account ml-3 icons"></i>
                                                <input name="name" value={this.state.name}  onChange={this.handleChange} id="name" type="text" class="form-control pl-5" placeholder="First Name :"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group position-relative">
                                                <label>Surname <span class="text-danger">*</span></label>
                                                <i class="mdi mdi-email ml-3 icons"></i>
                                                <input value={this.state.lastName}  onChange={this.handleChange} name="lastName" id="lastName" type="email" class="form-control pl-5" placeholder="Surname :"/>
                                            </div> 
                                        </div>
                                        <div class="col-md-12">
                                        
                                   </div>
                                               
                                        <div class="col-md-6">
                                            <div class="form-group position-relative">
                                                <label>City</label>
                                                <i class="mdi mdi-book ml-3 icons"></i>
                                                <input value={this.state.city}   onChange={this.handleChangeCity} name="typeOfNeedy" id="typeOfNeedy" class="form-control pl-5" placeholder="(Enter his/her city) :"/>
                                            </div>                                                                               
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group position-relative">
                                                <label>State</label>
                                                <i class="mdi mdi-book ml-3 icons"></i>
                                                <input value={this.state.state}   onChange={this.handleChange} name="typeOfNeedy" id="typeOfNeedy" class="form-control pl-5" placeholder="(Autofilled)"/>
                                            </div>                                                                               
                                        </div>
                                        <div style={{ height: '30vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCT-jRtPJqNbV9NhKzHhoHSpWe6SVv3rMo' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          
        >
          <AnyReactComponent
            lat={this.state.lat}
            lng={this.state.lng}
            text={<Icon path={mdiMapMarker}
            size={1.4}/>}
          />
        </GoogleMapReact>
      </div>
                       
                                        <div class="col-md-12">
                                            <div class="form-group position-relative">
                                                <label>Type</label>
                                                <i class="mdi mdi-book ml-3 icons"></i>
                                                <input autoComplete='off' value={this.state.typeOfNeedy}   onChange={this.handleChangeType} name="typeOfNeedy" id="typeOfNeedy" class="form-control pl-5" placeholder="Need of person :"/>
                                            </div>                                                                               
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group position-relative">
                                                <label>Name Of NGO</label>
                                                <i class="mdi mdi-book ml-3 icons"></i>
                                                <input value={this.state.ngoName} onChange={this.handleChange} name="ngoName" id="ngoName" class="form-control pl-5" placeholder="Your subject :"/>
                                            </div>                                                                               
                                        </div>
                                       
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12 text-center">
                                            <input type="submit" id="submit" name="send" class="submitBnt btn btn-primary btn-block" value="Send Message"/>
                                            <div id="simple-msg"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-7 col-md-6 order-1 order-md-2">
                        <img src="images\contact.png" class="img-fluid" alt=""/>
                    </div>
                </div>
            </div>

            <div class="container-fluid mt-100 mt-60">
                <div class="row">
                    <div class="col-12 p-0">
                        <div class="map">
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>
        )
    }
}

export default AddProfile
