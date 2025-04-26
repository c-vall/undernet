<script>
  import { base } from '$app/paths';
</script>
<div class="logo-container">
  <img src="{base}/images/logo_default.png" alt="Logo" />

  </div>
  
  <style>
    .logo-container {
      display: flex;
      text-align: center;
      filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5));
      animation: pulse 3s infinite alternate;
      opacity: 1;
      flex: 1;
      width: 100%;
    }
  
    .logo-container img {
      max-width: 800px;
      width: 80%;
      margin: auto;
      display: block;
    }
  
    @keyframes pulse {
      from {
        transform: scale(0.95);
        filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5));
      }
      to {
        transform: scale(1);
        filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.4));
      }
    }
  </style>
  