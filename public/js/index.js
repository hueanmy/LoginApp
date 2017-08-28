$(document).ready(() => {
	$('.searchButton').click((e) => {
		searchCondition();
	});

	$('.searchInput').keypress((e) => {
		if (e.keyCode == 13){
			searchCondition();
		}
	});

	$('#inputImage').change((e) => {
        let formData = new FormData();
        formData.append('avatar', e.target.files[0]);

        $.ajax({
            url: '/upload',
            type: 'post',
            data: formData,
            processData: false,
            contentType: false,
            success: (result) => {
                if (result.status == 'success') {
                    $('.avatar').attr('src', result.link);
                    $("[name='avatar']").val(result.link);
                }
            }
        })
    });
})

function searchCondition() {
	let query = $('.searchSelect').val() + '=' + $('.searchInput').val();
	let url = `/profile/list?${query}`;

	window.location.href = url;
}