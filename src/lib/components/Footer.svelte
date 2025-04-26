<div class="footer">
    <p>Site made by Dreamloader, Cybermonk and Bedro</p>
    <button id="WINAMPBTN">
      <ion-icon name="headset-sharp" size="large"></ion-icon>
    </button>
  </div>
  
  <style>
    .footer {
      height: 10vh;
      width: 100%;
      text-align: center;
      display: flex;
      align-items: center;
    }
  
    .footer p {
      margin: auto;
    }
  
    #WINAMPBTN {
      opacity: 0;
      margin: 0 20px;
      width: 50px;
      height: 50px;
      background: rgb(214, 214, 214);
      color: rgb(126, 126, 126);
      border: none;
      cursor: pointer;
      border-radius: 50%;
      text-decoration: none;
      transition: background 0.5s, color 0.5s;
    }
  
    #WINAMPBTN:hover {
      background: rgb(141, 141, 141);
      color: rgb(224, 224, 224);
    }
  </style>
  
  <!-- Add this to your main layout or +page.svelte once -->
