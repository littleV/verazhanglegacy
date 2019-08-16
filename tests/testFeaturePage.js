import { Selector } from 'testcafe';
import { Utils } from './util.js'
fixture `Feature Page Tests`
	.page("http://0.0.0.0:8000/")

// Footer links
test('Gallery link', async t => {
    const galleryLink = Selector('#footer-links').child(0).child(1);

    await t.click(galleryLink)
    		.expect(Utils.getLocation()).contains("/gallery");
});

test('Blog link', async t => {
    const blogLink = Selector('#footer-links').child(0).child(2);

    await t.click(blogLink)
    		.expect(Utils.getLocation()).contains("/blog");
});

test('About link', async t => {
    const aboutLink = Selector('#footer-links').child(0).child(3);

    await t.click(aboutLink)
    		.expect(Utils.getLocation()).contains("/about");
});

test('Instagram link', async t => {
    const supportLink = Selector('#footer-links').child(0).child(4);

    await t.click(supportLink)
    		.expect(Utils.getLocation()).contains("www.instagram.com/vera_z/");
});

test('Support link', async t => {
    const supportLink = Selector('#footer-links').child(0).child(6);

    await t.click(supportLink)
    		.expect(Utils.getLocation()).contains("/support");
});

test('Ads link', async t => {
    const adsLink = Selector('#footer-links').child(0).child(7);

    await t.click(adsLink)
    		.expect(Utils.getLocation()).contains("/ads");
});

test('Privacy link', async t => {
    const privacyLink = Selector('#footer-links').child(0).child(8);

    await t.click(privacyLink)
    		.expect(Utils.getLocation()).contains("https://www.freeprivacypolicy.com/privacy/view/fc6bd4104410e9573eead5ce0a7f1b3e");
});

// Main slider
test('Right and left arrows', async t=>{
	var activeItem = Selector('.active');
	var currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art33.jpg');
	var right = Selector('.right');
	await t.click(right)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art34.jpg');
	right = Selector('.right');
	await t.click(right)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art35.jpg');
	right = Selector('.right');
	await t.click(right)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art36.jpg');
	right = Selector('.right');
	await t.click(right)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art37.jpg');
	right = Selector('.right');
	await t.click(right)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art41.jpg');
	right = Selector('.right');
	await t.click(right)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art42.jpg');
	right = Selector('.right');
	await t.click(right)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art33.jpg');
	var left = Selector('.left');
	await t.click(left)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art42.jpg');
	left = Selector('.left');
	await t.click(left)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art41.jpg');
	left = Selector('.left');
	await t.click(left)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art37.jpg');
	left = Selector('.left');
	await t.click(left)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art36.jpg');
	left = Selector('.left');
	await t.click(left)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art35.jpg');
	left = Selector('.left');
	await t.click(left)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art34.jpg');
	left = Selector('.left');
	await t.click(left)
			.wait( 1000 );
	activeItem = Selector('.active');
	currentImageUrl = await activeItem.child(0).child(0).getAttribute('src');
	await t.expect(currentImageUrl).contains('gallery/images/art33.jpg');

});

test('Click to details', async t=>{
	const currentImage = Selector('.active').child(0).child(0);
    await t.click(currentImage)
			.expect(Utils.getLocation()).contains("gallery/detail.html?title=art33.jpg");
	await Utils.goBack();
	const right = Selector('.right');
	await t.click(right).wait(1000);
	await t.click(currentImage)
			.expect(Utils.getLocation()).contains("gallery/detail.html?title=art34.jpg");
	await Utils.goBack();
	for(let i = 0; i < 2; i++) {
    	await t
	        .click(right)
	        .wait(1000)
	}
	await t.click(currentImage)
			.expect(Utils.getLocation()).contains("gallery/detail.html?title=art35.jpg");
	await Utils.goBack();
	for(let i = 0; i < 3; i++) {
    	await t
	        .click(right)
	        .wait(1000)
	}
	await t.click(currentImage)
			.expect(Utils.getLocation()).contains("gallery/detail.html?title=art36.jpg");
	await Utils.goBack();
	for(let i = 0; i < 4; i++) {
    	await t
	        .click(right)
	        .wait(1000)
	}
	await t.click(currentImage)
			.expect(Utils.getLocation()).contains("gallery/detail.html?title=art37.jpg");
	await Utils.goBack();
	for(let i = 0; i < 5; i++) {
    	await t
	        .click(right)
	        .wait(1000)
	}
	await t.click(currentImage)
			.expect(Utils.getLocation()).contains("gallery/detail.html?title=art41.jpg");
	await Utils.goBack();
	for(let i = 0; i < 6; i++) {
    	await t
	        .click(right)
	        .wait(1000)
	}
	await t.click(currentImage)
			.expect(Utils.getLocation()).contains("gallery/detail.html?title=art42.jpg");
});



