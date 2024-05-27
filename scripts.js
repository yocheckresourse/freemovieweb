 <script>
      document.getElementById('emailBox').addEventListener('click', function(event) {
        alert('Opening email client to contact: makaboybolol@gmail.com');
      });

      document.getElementById('container').addEventListener('click', function(event) {
        if (event.target.tagName === 'A' && event.target.href.startsWith('https://discord.com')) {
          alert('Opening Discord channel in a new tab...');
          window.open(event.target.href, '_blank');
        }
      });