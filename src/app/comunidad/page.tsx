import { ImageWrapper } from "@/components/Image"
import { Metadata } from "next/types"
import { getSingles } from "@/services"
import { APIResponseData } from "@/types/types"
import { getImagePath } from "@/utils/helpers"

import './page.scss'
import { CommunityForm } from "@/components/pages/comunidad/form"

export const generateMetadata = async (): Promise<Metadata> => ({
  title: "Haz parte de nuestra comunidad",
  description: "Haz parte de nuestra comunidad y únete a nosotros en XXX",
  openGraph: {
    title: "Haz parte de nuestra comunidad",
    description: "Haz parte de nuestra comunidad y únete a nosotros en XXX",
    images: getImagePath(null, 'small'),
    url: `https://sagradacura.com/comunidad`,
    type: 'website'
  }
})


const ContactPage = async () => {
  const { banner } = await getSingles<APIResponseData<"api::pagina-contacto.pagina-contacto">>('pagina-contacto')
  return (
    <div className="contact-page mb-40">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="contact-page-thumb hover-img mb-60">
              <ImageWrapper image={banner} fill format="large" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center g-4 mb-100">
          <div className="col-4">
            <CommunityForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
