<!DOCTYPE html>
<html lang="en">

<body>
  <p class="statewise">Indian government jobs&nbsp;<a href="../../index.php#section3" target="_self">Click
      Here</a>
  </p>
  <p class="statewise">State government jobs&nbsp;<a href="../../state.php#section2" target="_self">Click
      Here</a>
  </p>
  <p class="statewise">Old government jobs&nbsp;<a href="old.php" target="_self">Click
      Here</a>
  </p>
  <!-- <p class="statewise">Previous Year Question Papers &nbsp;<a href="../../question.php#section3" target="_self">Click
            Here</a>
    </p> -->
  <!-- <div id="share-buttons">
        <p style="color: green; font-weight: bold; font-size: 20px; text-decoration:underline">SHARE:</p>
        <a class="whatsapp" target="_blank"><i class="fab fa-whatsapp"></i></a>
        <a class="facebook" target="_blank"><i class="fab fa-facebook"></i></a>
        <a class="twitter" target="_blank"><i class="fab fa-twitter"></i></a>
        <a class="telegram" target="_blank"><i class="fab fa-telegram"></i></a>
    </div> -->
    <p class="copyright">Copyright@ indiangovermentjobs | <a
            href="mailto:indiangovermentjobs.helpline@gmail.com">Contact</a> | <a href="../../index.php"
            target="_self">Home</a> | <a href="../../aboutus.php" target="_self">About</a></p>
            <script>
        const link = encodeURIComponent(window.location.href);
        const msg = encodeURIComponent('Click the notification link and apply the job');
        const pageTitle = encodeURIComponent(document.title);

        const fb = document.querySelector('.facebook');
        fb.href = `https://www.facebook.com/share.php?u=${link}&quote=${msg}`;

        const twitter = document.querySelector('.twitter');
        twitter.href = `https://www.twitter.com/share?url=${link}&text=${msg}&hashtags=indiangovermentjobs.com`;

        const whatsapp = document.querySelector('.whatsapp');
        whatsapp.href = `https://wa.me/?text=${msg}%20${link}`;

        const telegram = document.querySelector('.telegram');
        telegram.href = `https://t.me/share/url?url=${msg}%20${link}`;

        document.querySelectorAll('.whatsapp, .telegram, .facebook, .twitter').forEach(button => {
            button.href += `&text=${pageTitle}`;
        });
    </script>
</body> 
</html>