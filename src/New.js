import React, { Component } from 'react'

export class New extends Component {
    render() {
        return (
            <div>
            <section class="cover-user bg-white">
            <div class="container-fluid">
                <div class="row position-relative">
                    <div class="col-lg-4 cover-my-30 order-2">
                        <div class="cover-user-img d-flex align-items-center">
                            <div class="row">
                                <div class="col-12">
                                    <div class="login_page position-relative">
                                        <div class="text-center">
                                            <h4 class="mb-4" href="/SignUp">Signup</h4>  
                                        </div>
                                        <form class="login-form">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group position-relative">                                               
                                                        <label>First name <span class="text-danger">*</span></label>
                                                        <i class="mdi mdi-account ml-3 icons"></i>
                                                        <input type="text" class="form-control pl-5" placeholder="First Name" name="s" required=""/>
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="form-group position-relative">                                                
                                                        <label>Last name <span class="text-danger">*</span></label>
                                                        <i class="mdi mdi-account ml-3 icons"></i>
                                                        <input type="text" class="form-control pl-5" placeholder="Last Name" name="s" required=""/>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="form-group position-relative">
                                                        <label>Your Email <span class="text-danger">*</span></label>
                                                        <i class="mdi mdi-account ml-3 icons"></i>
                                                        <input type="email" class="form-control pl-5" placeholder="Email" name="email" required=""/>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="form-group position-relative">
                                                        <label>Password <span class="text-danger">*</span></label>
                                                        <i class="mdi mdi-key ml-3 icons"></i>
                                                        <input type="password" class="form-control pl-5" placeholder="Password" required=""/>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="form-group position-relative">
                                                        <label>Confirm Password <span class="text-danger">*</span></label>
                                                        <i class="mdi mdi-key ml-3 icons"></i>
                                                        <input type="password" class="form-control pl-5" placeholder="Confirm Password" required=""/>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                                            <label class="custom-control-label" for="customCheck1">I Accept <a href="#" class="text-primary">Terms And Condition</a></label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <button class="btn btn-primary w-100">Register</button>
                                                </div>

                                                <div class="col-lg-12 mt-4 text-center">
                                                    <h6>Or Signup With</h6>
                                                    <ul class="list-unstyled social-icon mb-0 mt-3">
                                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-facebook" title="Facebook"></i></a></li>
                                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-google-plus" title="Google"></i></a></li>
                                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-github-circle" title="Github"></i></a></li>
                                                    </ul>
                                                </div>

                                                <div class="mx-auto">
                                                    <p class="mb-0 mt-3"><small class="text-dark mr-2">Already have an account ?</small> <a href="page-cover-login.html" class="text-dark font-weight-bold">Sign in</a></p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>    

                    {/* <div class="col-lg-8 offset-lg-4 padding-less img order-1" style="background-image:url('images/user/02.jpg')" data-jarallax="{&quot;speed&quot;: 0.5}"></div>    */}

                    <div class="col-lg-8 offset-lg-4 padding-less img order-1" style={{backgroundImage:"url('images/user/02.jpg')"}} data-jarallax='{"speed": 0.5}'></div>
                </div>
            </div>
        </section>
            </div>
        )
    }
}

export default New
