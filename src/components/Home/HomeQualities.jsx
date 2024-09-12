import { Award, Users, Ruler, Shield, Briefcase, Sofa, LayoutDashboard, ClipboardCheck } from 'lucide-react'

const qualities = [
  {
    icon: <Award className="w-12 h-12 text-red-500" />,
    title: "Only ISO certified",
    // description: "interior design brand"
  },
  {
    icon: <Users className="w-12 h-12 text-red-500" />,
    title: "300+ in-house",
    // description: "designers"
  },
  {
    icon: <Ruler className="w-12 h-12 text-red-500" />,
    title: "8 million+ sq.ft",
    // description: "designed and delivered"
  },
  {
    icon: <Shield className="w-12 h-12 text-red-500" />,
    title: "10 year product warranty,",
    // description: "1 year service warranty"
  },
  {
    icon: <Briefcase className="w-12 h-12 text-red-500" />,
    title: "Professionally managed",
    // description: "interior design services"
  },
  {
    icon: <Sofa className="w-12 h-12 text-red-500" />,
    title: "Full-home personalised",
    // description: "interiors"
  },
  {
    icon: <LayoutDashboard className="w-12 h-12 text-red-500" />,
    title: "End-to-end",
    // description: "solutions"
  },
  {
    icon: <ClipboardCheck className="w-12 h-12 text-red-500" />,
    title: "7-stage quality check",
    // description: "with 400+ tests"
  }
]

export default function HomeQualities() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className=" text-center text-red-600 font-thin text-2xl lg:text-4xl  sm:text-4xl mb-12">
          Atharva Constructions & Interiors: The preferred Brand for you
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-8">
          {qualities.map((quality, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-100">
                {quality.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900">{quality.title}</h3>
              <p className="mt-2 text-sm font-extralight text-gray-500">{quality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}