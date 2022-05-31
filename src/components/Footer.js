import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark bg-opacity-75">
      <div className="footer">
        <div class="container">
          <div class="row ">
            <div className="col align-start text-white">
              <span className="fw-semibold item-title">KHOA - TRUNG TÂM</span>
              <div className="is-divider"></div>
              <div className="item-content">
                <ul className="list-items">
                  <li className="item">
                    <a href="#" className="item-link">
                      Khoa học Máy tính
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="item-link">
                      Kỹ thuật Máy tính
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="item-link">
                      Trung tâm Cyber Security
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="item-link">
                      Trung tâm Đổi mới Sáng tạo
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="item-link">
                      Trung tâm Máy tính và Thực hành
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="item-link">
                      Trung tậm Nghiên cứu Quốc tế về Định vị sử dụng vệ tinh
                      (NAVIS)
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="item-link">
                      Trung tâm Nghiên cứu Quốc tế về Trí tuệ nhân tạo
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="item-link">
                      Văn Phòng Trường
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col align-start text-white">
              <span className="fw-semibold item-title">
                CHƯƠNG TRÌNH ĐÀO TẠO
              </span>
              <div className="is-divider"></div>
              <div className="item-content">
                <ul className="list-items">
                  <li className="item">
                    <a href="#" className="item-link">
                      Chương trình Việt Nhật (HEDSPI)
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="item-link">
                      Chương trình Global ICT
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="item-link">
                      Chương trình Khoa học dữ liệu và trí tuệ nhân tạo
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="item-link">
                      Chương trình Thạc sỹ Chuyển đổi số
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="item-link">
                      Các chương trình đại học
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="item-link">
                      Các chương trình thạc sỹ
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="item-link">
                      Các chương trình tiến sỹ
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="item-link">
                      Các chương trình đào tạo ngắn hạn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col align-start text-white">
              <span className="fw-semibold item-title">
                HỆ THỐNG VÀ TÀI NGUYÊN
              </span>
              <div className="is-divider"></div>
              <div className="item-content">
                <ul className="list-items">
                  <li className="item">
                    <a href="#" className="item-link">
                      Hệ thống Quản lý Đào tạo
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="item-link">
                      Hệ thống Quản lý Hợp tác Doanh nghiệp
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="item-link">
                      Các mẫu biểu dành cho sinh viên Viện
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col align-start">
              <div>
                <p>
                  <img
                    src="/soict-logo.png"
                    alt=""
                    width="204"
                    height="45"
                    class="d-inline-block align-text-top logo-hust"
                  />
                </p>
                <p className="mb-0 contact">
                  <i class="bi bi-telephone-fill"></i> (+84) 24 3869 2463
                </p>
                <p className="mb-0 contact">
                  <i class="bi bi-envelope"></i> vp@soict.hust.edu.vn
                </p>
                <p className="mb-0 contact">
                  P. 505 – Nhà B1 – Đại học Bách khoa Hà Nội
                </p>
                <p className="mb-0 contact">
                  Số 1 Đại Cồ Việt – Hai Bà Trưng – Hà Nội
                </p>
                <div className="social-icon d-flex">
                  <a href="#" className="social-link">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i class="bi bi-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-top copyright">
        <p className="align-start">
          Copyright ©{" "}
          <strong>Trường Công nghệ Thông tin và Truyền thông</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
