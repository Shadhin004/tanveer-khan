
'use client'
import { useEffect, useState } from "react"
import AddClassBody from '../elements/AddClassBody'
import BackToTop from '../elements/BackToTop'
import DataBg from '../elements/DataBg'
import ImageHoverEffects from '../elements/ImageHoverEffects'
import Breadcrumb from './Breadcrumb'
import MobileMenu from './MobileMenu'
import Footer from "./Footer"
import Header from "./Header"
import WOW from 'wowjs'


export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }) {
	const [scroll, setScroll] = useState(false)
	// Mobile Menu
	const [isMobileMenu, setMobileMenu] = useState(false)
	const handleMobileMenu = () => {
		setMobileMenu(!isMobileMenu)
		!isMobileMenu ? document.body.classList.add("mobile-menu-active") : document.body.classList.remove("mobile-menu-active")
	}

	// Search
	const [isSearch, setSearch] = useState(false)
	const handleSearch = () => setSearch(!isSearch)

	// OffCanvas
	const [isOffCanvas, setOffCanvas] = useState(false)
	const handleOffCanvas = () => setOffCanvas(!isOffCanvas)

// 	useEffect(() => {
// 		// const WOW = require('wowjs');
// window.wow = new WOW({
//     live: false
// });

// 		// Initialize WOW.js
// 		window.wow.init()

// 		const handleScroll = () => {
// 			const scrollCheck = window.scrollY > 100
// 			if (scrollCheck !== scroll) {
// 				setScroll(scrollCheck)
// 			}
// 		}

// 		document.addEventListener("scroll", handleScroll)

// 		return () => {
// 			document.removeEventListener("scroll", handleScroll)
// 		}
// 	}, [scroll])
	return (
		<>
			<div id="top" />
			<AddClassBody />
			<DataBg />
			<ImageHoverEffects />
			{!headerStyle && <Header scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />}
			{headerStyle == 1 ? <Header scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} /> : null}
			{headerStyle == 2 ? <Header scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} /> : null}
			{headerStyle == 3 ? <Header scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} /> : null}
			<MobileMenu />

			<main className="main">
				{breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

				{children}
			</main>

			{!footerStyle && < Footer />}
			{footerStyle == 1 ? < Footer /> : null}
			{footerStyle == 2 ? < Footer /> : null}
			{footerStyle == 3 ? < Footer /> : null}

			<BackToTop target="#top" />
		</>
	)
}
