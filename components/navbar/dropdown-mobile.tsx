import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { INavLink } from ".";
import Link from "next/link";
export const DropdownMobile: React.FC<{ navLink: INavLink; idx: number }> = ({
    navLink,
    idx,
  }) => (
    <Accordion type="single" collapsible key={idx} disabled={navLink.disabled} className="md:hidden">
      <AccordionItem value={`item-${idx}`} className="border-b-0">
        <AccordionTrigger
          className={`hover:no-underline hover:text-hoverPrimary py-0 text-left text-[#777E90] disabled:cursor-not-allowed disabled:opacity-80 flex items-center min-w-[127px]`}
        >
          {navLink.label}
        </AccordionTrigger>
        {navLink.subLinks &&
          navLink.subLinks.map((subLink, idx) => (
            <AccordionContent
              className="group pt-3 pb-0 text-base text-left"
              key={idx}
            >
              <Link
                href={subLink.path}
                target="_blank"
                className="text-[#777E90] hover:text-hoverPrimary flex space-x-3 items-center group-hover:bg-primary-50 space-y-2"
              >
                <div
                  style={{ background: subLink.background }}
                  className="group-hover:bg-primary-100 w-8 h-8 flex justify-center items-center shadow-custom rounded"
                >
                  {subLink.icon}
                </div>
                <div>
                  <div className="text-sm mb-1">{subLink.title}</div>
                </div>
              </Link>
            </AccordionContent>
          ))}
      </AccordionItem>
    </Accordion>
  );