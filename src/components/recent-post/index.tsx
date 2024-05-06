import Link from 'next/link'
import Image from 'next/image'

const RecentPost = () => (
    <div className="shop-widget mb-30">
      <h5 className="shop-widget-title">Recent Post</h5>
      <div className="recent-post-widget mb-20">
        <div className="recent-post-img">
          <Link legacyBehavior href="/blog-details">
            <a>
              <img src="/assets/img/inner-page/recent-post-img1.png" alt="" />
            </a>
          </Link>
        </div>
        <div className="recent-post-content">
          <Link legacyBehavior href="/blog-grid">
            <a>20 July, 2023</a>
          </Link>
          <h6>
            <Link legacyBehavior href="/blog-details">
              <a>Poutsicle Hydrating Lipo Stain offering.</a>
            </Link>
          </h6>
        </div>
      </div>
      <div className="recent-post-widget mb-20">
        <div className="recent-post-img">
          <Link legacyBehavior href="/blog-details">
            <a>
              <img src="/assets/img/inner-page/recent-post-img2.png" alt="" />
            </a>
          </Link>
        </div>
        <div className="recent-post-content">
          <Link legacyBehavior href="/blog-grid">
            <a>12 July, 2023</a>
          </Link>
          <h6>
            <Link legacyBehavior href="/blog-details">
              <a>rutrum vitae augue idel euismod pulvi.</a>
            </Link>
          </h6>
        </div>
      </div>
      <div className="recent-post-widget mb-20">
        <div className="recent-post-img">
          <Link legacyBehavior href="/blog-details">
            <a>
              <img src="/assets/img/inner-page/recent-post-img3.png" alt="" />
            </a>
          </Link>
        </div>
        <div className="recent-post-content">
          <Link legacyBehavior href="/blog-grid">
            <a>04 July, 2023</a>
          </Link>
          <h6>
            <Link legacyBehavior href="/blog-details">
              <a>Donec blandit fermentu diam non.</a>
            </Link>
          </h6>
        </div>
      </div>
    </div>
  )

export { RecentPost }
