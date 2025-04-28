<script>
    import { base } from '$app/paths';
  
    const logoBackgrounds = [
      '2_1.gif',
      '3_1.gif',
      '2_3.gif',
      '3_3.gif',
      '3_4.gif',
      '3_2.gif'
    ];
  
    const randomLogoBackground = logoBackgrounds[Math.floor(Math.random() * logoBackgrounds.length)];
  
    const logoBackgroundUrl = `${base}/images/logo_bg/${randomLogoBackground}`;
    
  </script>
  
  <div style="background-image: url({logoBackgroundUrl}); background-size: cover; background-position: center; background-repeat: no-repeat;">

    <slot />

  </div>
  
  <style>
  </style>
  