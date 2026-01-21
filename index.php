<?php
    use Dompdf\Dompdf;
    require_once 'vendor/autoload.php';
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (isset($_POST['html_content'])) {
            $htmlContent = $_POST['html_content'];
            $dompdf = new Dompdf();
            $dompdf->loadHtml($htmlContent);
            $dompdf->setPaper('A4', 'portrait');
            $dompdf->render();
            $dompdf->stream("generated_cv.pdf", ["Attachment" => false]);
        }
    }
?>