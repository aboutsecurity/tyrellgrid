(async function() {
  const container = document.getElementById('container');
  let lines = [];
  try {
    const resp = await fetch('data/bladerunner.txt');
    if (!resp.ok) throw new Error();
    const text = await resp.text();
    lines = text.split(/\r?\n/).filter(Boolean);
  } catch (e) {
    container.innerHTML = '<p style="color:#f00;">Error loading Blade Runner script. Please add it to <code>html/data/bladerunner.txt</code></p>';
    return;
  }

  function getRandomSentences(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(lines[Math.floor(Math.random() * lines.length)]);
    }
    return arr.join(' ');
  }

  const paragraph = document.createElement('p');
  paragraph.textContent = getRandomSentences(5);

  const link = document.createElement('a');
  link.href = '/tyrellgrid?rand=' + Math.random();
  link.textContent = 'Enter deeper.';
  link.style.display = 'block';
  link.style.marginTop = '20px';

  container.innerHTML = '';
  container.appendChild(paragraph);
  container.appendChild(link);
})();