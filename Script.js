$(document).ready(function(){

$("body").append('<form data-toggle="validator" role="form" id="form"><fieldset class="form-group"><label for="formGroupExampleInput"></label><input type="text" name="name" class="form-control" id="inputUserame" placeholder="Username"></fieldset><form><fieldset class="form-group"><label for="exampleInputEmail1"></label><input type="email" name="email" class="form-control" id="inputEmail1" placeholder="Enter email"><small class="text-muted"></small></fieldset><fieldset class="form-group"><label for="exampleInputPassword1"></label><input type="password" name="password" class="form-control" id="inputPassword1" placeholder="Enter Password"></fieldset><fieldset class="form-group"><label for="exampleinputPassword1"></label><input type="password" name="confirmPassword" class="form-control" id="confirmPassword1" placeholder="Confirm Password"></fieldset><fieldset class="form-group"><label for="exampleInputPassword1"></label><input type="number" name="age" class="form-control" id="inputAge1" placeholder="Enter Age"></fieldset><button type="submit" class="btn btn-primary">Sign Up</button></form>');

$("#form").validate({
	rules: {
	name: {
		required: true,
		minlength: 6
	},
	email: {
		required: true,
		email: true
	},
	password: {
		required: true,
		minlength: 8
	},
	confirmPassword: {
		required: true,
		minlength: 8,
		equalTo: "#inputPassword1"
	},
	age: {
		required: true,
		minlength: 2,
		maxlength: 3
	}
},
	messages: {
		name: {
			required: "Please enter your name",
		},
		
	
		email: {
			required: "Please enter your email addres"
		},
		password: {
			required: "Please enter your password",
			minlength: "Your password must contain at least 8 caracters"
		},
		confirmPassword: {
			required: "Please confirm your password",
			minlength: "Your password must contain at least 8 caracters",
			equalTo: "Please enter the same password as above"
		},
		age: {
			required: "Please enter your age",
			minlength: "You are too young to sign in",
			maxlength: "Please enter a valid age"
		}
		}
	});
});


