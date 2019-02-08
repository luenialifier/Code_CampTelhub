function getFormData(){
	var curricula = $("#curricula").val();
	var skills = $("#skills").val();
	var portfolio = $("#portfolio").val();
	var blog = $("#blog").val();
	var contact = $("#contact").val();
	console.log(curricula,skills,portfolio,blog,contact,);
		var FormObjet = {

				curricula: FormCurricula,
				skills: FormSkills,
				portfolio: FormPotfolio,
				blog: FormBlog,
				contact: FormContact

		}
		FormData.push(FormObjet);
		printData();
		console.log(FormData)
		$("#add-form-group").val("");

}

$("#submit-button").on("click", function() {
    getFormData();
});

