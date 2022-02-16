
export const revealLogoMask = {
	initial: { y: '0%' },
  enter: { 
    y: '-110%',
    transition: { duration: 1.5, ease: [0.985, 0.010, 0.315, 0.830], delay: 0.3 }
  },
	exit: {
    y: '-110%',
		transition: { duration: 0.5, ease: [0.985, 0.010, 0.315, 0.830] }
	}
}

export const logoUnderscore = {
	initial: { x: '-110%' },
  enter: { 
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    x: 0,
    opacity: 1,
		transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1] }
	}
}

export const logoReveal = {
	initial: { opacity: 1, scale: 1 },
  enter: { 
    opacity: 0.10,
    scale: 1,
    transition: { duration: 1.1, ease: [0.83, 0, 0.17, 1], delay: 1 }
  },
	exit: {
    opacity: 0.10,
    scale: 1,
		transition: { duration: 1.1, ease: [0.83, 0, 0.17, 1] }
	}
}

export const revealDownDelay = {
	initial: { y: '-110%' },
  enter: { 
    y: 0,
    transition: { duration: 1, ease: [.3,.73,.27,.97], delay: 1.25 }
  },
	exit: {
    y: '-110%',
		transition: { duration: 1, ease: [.3,.73,.27,.97] }
	}
}

export const revealUpDelay = {
	initial: { y: '110%' },
  enter: { 
    y: 0,
    transition: { duration: 1, ease: [.3,.73,.27,.97], delay: 1.25 }
  },
	exit: {
    y: '110%',
		transition: { duration: 1, ease: [.3,.73,.27,.97] }
	}
}

export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.55, ease: [.3,.73,.27,.97], delay: 1.25 }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.55, ease: [.3,.73,.27,.97], delay: 0.1 }
	}
}