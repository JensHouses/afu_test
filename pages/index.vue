<template>
  <div class="home">
    <h1>Willkommen zur Amateurfunk-Prüfungshilfe</h1>
    <p>
      Dieses Tool wurde entwickelt, um dich optimal auf die Amateurfunkprüfungen vorzubereiten.  
      Egal, ob du **für die Prüfung lernen**, **Wissen testen** oder eine vollständige Simulation durchführen möchtest – hier findest du alles an einem Ort.
    </p>

    <hr />

    <h2>Funktionen der Anwendung</h2>
    <ul>
      <li><strong>Online Prüfungsfragen:</strong> Übe echte Prüfungsfragen, um dich mit dem Ablauf vertraut zu machen.</li>
      <li><strong>Simulation:</strong> Bereite dich auf echte Prüfungssituationen vor.</li>
      <li><strong>Lernmaterialien:</strong> Entdecke nützliche Dokumente und Tipps, um erfolgreich zu lernen.</li>
    </ul>

    <hr />
    
    <h2>Dein Weg zur Amateurfunklizenz</h2>
    <p>
      Der Amateurfunk bietet dir unzählige Möglichkeiten, dich persönlich und technisch weiterzuentwickeln.  
      Unser Ziel ist es, dir die Vorbereitung so einfach wie möglich zu machen.  
      Starte noch heute mit deiner Vorbereitung!
    </p>
    
    <div class="cta-section">
      <NuxtLink to="/online" class="cta-button">Zu den Online Prüfungsfragen</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 800px;
  margin: 2rem auto;
  text-align: center;
}

h1 {
  color: #0077cc;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

h2 {
  color: #0056a3;
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  line-height: 1.8;
}

ul {
  list-style-type: none;
  padding: 0;
  font-size: 1.2rem;
}

li {
  margin: 0.5rem 0;
}

hr {
  margin: 2rem 0;
  border: 0;
  border-top: 1px solid #ccc;
}

.cta-section {
  margin-top: 2rem;
}

.cta-button {
  display: inline-block;
  background-color: #0077cc;
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: bold;
}

.cta-button:hover {
  background-color: #0056a3;
}
</style>