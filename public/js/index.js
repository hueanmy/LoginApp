$(document).ready(() => {
	$('.searchButton').click((e) => {
		searchCondition();
	});

	$('.searchInput').keypress((e) => {
		if (e.keyCode == 13){
			searchCondition();
		}
	});
})

function searchCondition() {
	let query = $('.searchSelect').val() + '=' + $('.searchInput').val();
	let url = `/profile/list?${query}`;

	window.location.href = url;
}