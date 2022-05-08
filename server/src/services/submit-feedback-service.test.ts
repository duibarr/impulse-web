import { SubmitFeedback } from "./submit-feedback-service"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedback(
    {create: createFeedbackSpy},
    {sendMail: sendMailSpy}
) 

describe("Submit feedback", () => {
    it("should be able to submit a feedback", async () => {
        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "example comment",
            screenshot: "data:image/png;base64/sdffgfsdsd"
        })).resolves.not.toThrow()

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })

    it("should not be able to submit a feedback without type", async () => {
        await expect(submitFeedback.execute({
            type: "",
            comment: "example comment",
            screenshot: "data:image/png;base64/sdffgfsdsd"
        })).rejects.toThrow()
    })

    it("should not be able to submit a feedback without comment", async () => {
        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "",
            screenshot: "data:image/png;base64/sdffgfsdsd"
        })).rejects.toThrow()
    })

    it("should not be able to submit a feedback with wrong screenshot format", async () => {
        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "example comment",
            screenshot: "image/png"
        })).rejects.toThrow()
    })
})