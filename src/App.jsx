import "./App.css";

const cards = [
	{ title: "NETCAST", url: "http://192.168.1.123/netcast/" },
	{ title: "SUNFISH", url: "https://kepegawaian.paljaya.com/sf6/" },
	{ title: "MANAGEMENT ASSET", url: "http://perumdapaljaya.assetlive.net/paljaya/profile/login" },
	{ title: "SIPAS", url: "https://paljaya.sipas.id/" },
	{ title: "SISTEM INFORMASI GEOGRAFIS", url: "https://paljaya.net/eam/profile/login" },
	{ title: "SIM LTT", url: "http://103.30.246.72/" },
	{ title: "E-PROCUREMENT", url: "https://eproc.paljaya.com/" },
	{ title: "SIMLAB", url: "https://eproc.paljaya.com/" },
	{ title: "PALJAYA WEB", url: "https://paljaya.com/" },
];

function App() {
	return (
		<div className="home-container" style={{ paddingTop: 0 }}>
			<header className="main-header">
				<h2>Portal Sistem Perumda PALJAYA</h2>
			</header>
			<h1 style={{ marginTop: 0 }}>Portal Sistem PALJAYA</h1>
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
			<footer className="main-footer">
				<small>
					&copy; {new Date().getFullYear()} Perumda PALJAYA. All rights
					reserved.
					<br />
					Email:{" "}
					<a
						href="email:paljaya@paljaya.co.id"
						style={{ color: "#fff", textDecoration: "underline" }}>
						info@paljaya.co.id
					</a>
					<br />
					Social Media:
					<a
						href="https://instagram.com/paljaya"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							marginLeft: "8px",
							color: "#fff",
							textDecoration: "underline",
						}}>
						Instagram
					</a>
					|
					<a
						href="https://facebook.com/paljaya"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							marginLeft: "8px",
							color: "#fff",
							textDecoration: "underline",
						}}>
						Facebook
					</a>
					|
					<a
						href="https://youtube.com/paljaya"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							marginLeft: "8px",
							color: "#fff",
							textDecoration: "underline",
						}}>
						Youtube
					</a>
				</small>
			</footer>
			<img src="/home-pal.png" alt="Home PAL" className="home-pal-img" />
			<img src="/car-pal.png" alt="Car PAL" className="car-pal-img" />
		</div>
	);
}

export default App;
