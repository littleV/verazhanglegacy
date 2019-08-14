import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

fixture `Getting Started`

const getLocation = ClientFunction(() => document.location.href.toString());

test
	.page("http://0.0.0.0:8000/")
	('Fearture page gallery link', async t => {
	    // Test code
	    const galleryLink = Selector('#footer-links').child(0).child(1);

	    await t.click(galleryLink)
	    		.expect(getLocation()).contains("/gallery");
	});

test
	.page("http://0.0.0.0:8000/")
	('Fearture page blog link', async t => {
	    // Test code
	    const galleryLink = Selector('#footer-links').child(0).child(2);

	    await t.click(galleryLink)
	    		.expect(getLocation()).contains("/blog");
	});

test
	.page("http://0.0.0.0:8000/")
	('Fearture page about link', async t => {
	    // Test code
	    const galleryLink = Selector('#footer-links').child(0).child(3);

	    await t.click(galleryLink)
	    		.expect(getLocation()).contains("/about");
	});