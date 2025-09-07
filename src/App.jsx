import "./App.css";

const cards = [
	{ title: "NETCAST", url: "http://192.168.1.123/netcast/" },
	{ title: "SUNFISH", url: "https://kepegawaian.paljaya.com/sf6/" },
	{
		title: "ASSET MANAGEMENT",
		url: "http://perumdapaljaya.assetlive.net/paljaya/profile/login"
	},
	{ title: "SIPAS", url: "https://paljaya.sipas.id/" },
	{
		title: "SISTEM INFORMASI GEOGRAFIS",
		url: "https://paljaya.net/eam/profile/login"
	},
	{ title: "SIM LLT", url: "http://103.30.246.72/" },
	{ title: "E-PROCUREMENT", url: "https://eproc.paljaya.com/" },
	{ title: "SIMLAB", url: "https://eproc.paljaya.com/" },
	{ title: "PALJAYA WEB", url: "https://paljaya.com/" }
];

function App() {
	return (
		<div className="home-container" style={{ paddingTop: 0 }}>
			<header className="main-header">
				<img
					src="/paljaya-logo.png"
					alt="PALJAYA Logo"
					className="paljaya-logo"
				/>
				<h2>
					PORTAL SISTEM PERUMDA PALJAYA
					<img
						src="/jakarta.png"
						alt="Jakarta Logo"
						style={{
							verticalAlign: "middle",
							marginLeft: "0.5rem"
						}}
					/>
				</h2>
			</header>
			<h1 style={{ marginTop: 0 }}>PORTAL SISTEM PALJAYA</h1>
			<main>
				<p>Selamat datang di portal sistem PALJAYA.</p>
				<div className="card-grid">
					{cards.map((card, idx) => (
						<a
							className="card-btn"
							href={card.url}
							key={idx}
							target="_blank"
							rel="noopener noreferrer">
							{card.title}
						</a>
					))}
				</div>
			</main>
			{/* <img src="/home-pal.png" alt="Home PAL" className="home-pal-img" /> */}
			{/* <img src="/car-pal.png" alt="Car PAL" className="car-pal-img" /> */}
			<img
				src="/asset-paljaya.png"
				alt="Asset PALJAYA"
				className="asset-paljaya-img"
			/>
			<footer className="main-footer">
				<div className="footer-content">
					<span>
						&copy; {new Date().getFullYear()} Perumda PALJAYA. All rights
						reserved.
					</span>
					<span>
						Email:{" "}
						<a href="mailto:paljaya@paljaya.co.id" style={{ color: "#fff" }}>
							paljaya@paljaya.co.id
						</a>
					</span>
					<div className="footer-social">
						<span>Social Media:</span>
						<a
							href="https://instagram.com/pdpaljaya"
							target="_blank"
							rel="noopener noreferrer">
							<img src="/instagram.svg" alt="Instagram" />
							Instagram
						</a>

						<a
							href="https://facebook.com/perumdapaljaya"
							target="_blank"
							rel="noopener noreferrer">
							<img src="/facebook.svg" alt="Facebook" />
							Facebook
						</a>

						<a
							href="https://www.youtube.com/@perumdapaljaya7500"
							target="_blank"
							rel="noopener noreferrer">
							<img src="/youtube.svg" alt="Youtube" />
							Youtube
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
