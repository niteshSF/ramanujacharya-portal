import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronDownIcon, Slash } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/app/store"
import { useGetAdhyayasQuery } from "../api/adhyayasApiSlice"
import { Skeleton } from "@/components/ui/skeleton"
import { useGetPadasQuery } from "../api/padasApiSlice"
import { useGetAdhikarnasQuery } from "../api/adhikarnasApiSlice"
import {
  selectMetadata,
  setAdhikarna,
  setAdhyaya,
  setPada,
  setSutra,
} from "../redux/sriBhashyamMetaDataSlice"
import { useGetSutrasQuery } from "../api/sutrasApiSlice"

export default function PathBreadcrumb() {
  const dispatch = useDispatch()
  const metadata = useSelector((state: RootState) => selectMetadata(state))

  const {
    data: adhyayas,
    isLoading: isAdhyayaLoading,
    error: adhyayaError,
  } = useGetAdhyayasQuery()

  const {
    data: padas,
    isLoading: isPadaLoading,
    error: padaError,
  } = useGetPadasQuery({ adhyaya_no: metadata.adhyaya })

  const {
    data: adhikarnas,
    isLoading: isAdhikarnaLoading,
    error: adhikarnaError,
  } = useGetAdhikarnasQuery({
    adhyaya_no: metadata.adhyaya,
    pada_no: metadata.pada,
  })

  const {
    data: sutras,
    isLoading: isSutraLoading,
    error: sutraError,
  } = useGetSutrasQuery({
    adhyaya_no: metadata.adhyaya,
    pada_no: metadata.pada,
    adhikarna_no: metadata.adhikarna,
  })

  return (
    <Breadcrumb>
      <BreadcrumbList>

        <BreadcrumbItem>
          {!adhyayaError ? (
            isAdhyayaLoading ? (
              <Skeleton className="h-6 w-16" />
              
            ) : ( 
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2">
                  Adhyaya {metadata.adhyaya}
                  <ChevronDownIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {adhyayas &&
                    adhyayas.map((adhyaya, index) => (
                      <DropdownMenuItem
                        key={index}
                        onClick={() => {
                          dispatch(setAdhyaya(adhyaya.number))
                        }}
                      >
                        Adhyaya {adhyaya.number}
                      </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )
          ) : (
            <p>{JSON.stringify(adhyayaError)}</p>
          )}
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <Slash strokeWidth={4} />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          {!padaError ? (
            isPadaLoading ? (
              <Skeleton className="h-6 w-16" />
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2">
                  Pada {metadata.pada}
                  <ChevronDownIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {padas &&
                    padas.map((pada, index) => (
                      <DropdownMenuItem
                        key={index}
                        onClick={() => {
                          dispatch(setPada(pada.number))
                        }}
                      >
                        Pada {pada.number}
                      </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )
          ) : (
            <p>{JSON.stringify(padaError)}</p>
          )}
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <Slash strokeWidth={4} />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          {!adhikarnaError ? (
            isAdhikarnaLoading ? (
              <Skeleton className="h-6 w-16" />
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2">
                  Adhikarna {metadata.adhikarna}
                  <ChevronDownIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {adhikarnas &&
                    adhikarnas.map((adhikarna, index) => (
                      <DropdownMenuItem
                        key={index}
                        onClick={() => {
                          dispatch(setAdhikarna(adhikarna.number))
                        }}
                      >
                        Adhikarna {adhikarna.number}
                      </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )
          ) : (
            <p>{JSON.stringify(adhikarnaError)}</p>
          )}
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <Slash strokeWidth={4} />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          {!sutraError ? (
            isSutraLoading ? (
              <Skeleton className="h-6 w-16" />
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2">
                  Sutra {metadata.sutra}
                  <ChevronDownIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {sutras &&
                    sutras.map((sutra, index) => (
                      <DropdownMenuItem
                        key={index}
                        onClick={() => {
                          dispatch(setSutra(sutra))
                        }}
                      >
                        Sutra {sutra}
                      </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )
          ) : (
            <p>{JSON.stringify(sutraError)}</p>
          )}
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
