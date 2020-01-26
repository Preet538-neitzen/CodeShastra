import React, { Component } from 'react'
var Dropdown = require('react-simple-dropdown');
var DropdownTrigger = Dropdown.DropdownTrigger;
var DropdownContent = Dropdown.DropdownContent;

export class AddProfile extends Component {
    constructor(){
        super();
       
        this.state = {
              displayMenu: false,
            };
       
         this.showDropdownMenu = this.showDropdownMenu.bind(this);
         this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
       
       };

    
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
        userName: 'Fred',
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
  

    render() {


        
        return (
            <div>
          
    
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
                                                <input name="name" id="name" type="text" class="form-control pl-5" placeholder="First Name :"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group position-relative">
                                                <label>Surname <span class="text-danger">*</span></label>
                                                <i class="mdi mdi-email ml-3 icons"></i>
                                                <input name="email" id="email" type="email" class="form-control pl-5" placeholder="Your email :"/>
                                            </div> 
                                        </div>
                                        <div class="col-md-12">
                                       
                                   </div>
                                        <div class="col-md-12">
                                            <div class="form-group position-relative">
                                                <label>Address</label>
                                                <i class="mdi mdi-book ml-3 icons"></i>
                                                <input name="subject" id="subject" class="form-control pl-5" placeholder="Your subject :"/>
                                            </div>                                                                               
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group position-relative">
                                                <label>Name Of NGO</label>
                                                <i class="mdi mdi-book ml-3 icons"></i>
                                                <input name="subject" id="subject" class="form-control pl-5" placeholder="Your subject :"/>
                                            </div>                                                                               
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group position-relative">
                                                <label>Comments</label>
                                                <i class="mdi mdi-comment-text-outline ml-3 icons"></i>
                                                <textarea name="comments" id="comments" rows="4" class="form-control pl-5" placeholder="Your Message :"></textarea>
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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" allowfullscreen=""></iframe>
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
