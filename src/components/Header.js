import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav class="navbar bg-white p-0">
        <div class="container">
          <div className="d-flex align-items-center">
            <Link class="navbar-brand" to="/">
              <img
                src="/logoHust.png"
                alt=""
                width="226"
                height="100"
                class="d-inline-block align-text-top logo-hust"
              />
            </Link>
            <p className="text-start mb-0 fw-bolder fs-6 title">
              ĐẠI HỌC BÁCH KHOA HÀ NỘI <br /> TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ
              TRUYỀN THÔNG
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <ul className="d-flex flex-column justify-content-center p-0">
              <li className="mb-2">
                <ul className="d-flex p-0 justify-content-center">
                  <li className="px-2">
                    <Link to="#" hrefLang="vi">
                      <img src="/vn.png" alt="" />
                    </Link>
                  </li>
                  <li className="px-2">
                    <Link to="#" hrefLang="en">
                      <img src="/gb.png" alt="" />
                    </Link>
                  </li>
                  <li></li>
                </ul>
              </li>
              <li>
                <div>
                  <input
                    type="search"
                    style={{
                      width: "200px",
                      height: "30px",
                      borderRadius: "5px",
                      boxShadow: "none",
                      background: "none",
                      border: "1px solid #ccc",
                    }}
                    placeholder="Search..."
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg bg-dark bg-opacity-100 wide-nav justify-content-around">
        <div class="container justify-content-around">
          <div
            class="collapse navbar-collapse justify-content-around"
            id="navbarSupportedContent "
          >
            <ul class="navbar-nav me-0 mb-2 mb-lg-0 justify-content-around">
              <li class="nav-item dropdown drop-items">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Giới thiệu
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown drop-items">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Khoa-Trung tâm
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown drop-items">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Đào tạo
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown drop-items">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Nghiên cứu
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown drop-items">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tuyển sinh
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown drop-items">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sinh viên
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown drop-items">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hợp tác đối ngoại
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown drop-items">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cựu sinh viên
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown drop-items">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tin tức - Sự kiện
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="/tintuc">
                      Tin tức
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown drop-items">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tuyển dụng
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
