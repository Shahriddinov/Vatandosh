import "./certificates.scss";
import downloadIcon from "../../../../../assets/images/portal/cabinetVolunteer/downloadIcon.svg";
import certificateImg from "../../../../../assets/images/portal/cabinetVolunteer/certificate.png";

const fakeCertificateData = [
  {
    id: 1,
    name: "СЕРТИФИКАТ",
    text: "Мы понимаем, что современный ритм жизни диктует необходимость молниеносно реагировать на внешние изменения, быстро принимать решения, быть яркими, быть первыми. Компетентность,",
    img: certificateImg,
  },
  {
    id: 2,
    name: "СЕРТИФИКАТ",
    text: "Мы понимаем, что современный ритм жизни диктует необходимость молниеносно реагировать на внешние изменения, быстро принимать решения, быть яркими, быть первыми. Компетентность,",
    img: certificateImg,
  },
  {
    id: 3,
    name: "СЕРТИФИКАТ",
    text: "Мы понимаем, что современный ритм жизни диктует необходимость молниеносно реагировать на внешние изменения, быстро принимать решения, быть яркими, быть первыми. Компетентность,",
    img: certificateImg,
  },
  {
    id: 4,
    name: "СЕРТИФИКАТ",
    text: "Мы понимаем, что современный ритм жизни диктует необходимость молниеносно реагировать на внешние изменения, быстро принимать решения, быть яркими, быть первыми. Компетентность,",
    img: certificateImg,
  },
];

const Certificates = () => {
  return (
    <div className="container-certificate">
      <div className="container-certificate-inner">
        <h1>Сертификаты</h1>
        <div className="container-certificate-inner_box">
          {fakeCertificateData.map((el, index) => (
            <div key={index} className="container-certificate-inner_box-each">
              <img
                key={index}
                className="container-certificate-inner_box-each-left"
                src={el.img}
                alt="cer"
              />
              <div
                key={index}
                className="container-certificate-inner_box-each-right"
              >
                <h1>{el.name}</h1>
                <p>{el.text}</p>
                <div className="container-certificate-inner_box-each-right-contDownload">
                  <div>
                    <img src={downloadIcon} alt="icon" />
                  </div>
                  <a href={el.img} download="Certificate">
                    Скачать сертификат
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
