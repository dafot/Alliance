function mobileNav() {
	const burgerButton = document.querySelector('.burger-menu');
	const mobileNav = document.querySelector('.mobile-nav');
	const body = document.querySelector('body')
	const html = document.querySelector('html')
	burgerButton.addEventListener('click', () => {
		mobileNav.classList.toggle('active');
		body.classList.toggle('hidden');
		html.classList.toggle('hidden')
		burgerButton.classList.toggle('active');
	})
}
export default mobileNav;