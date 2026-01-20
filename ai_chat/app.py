import streamlit as st

st.set_page_config(page_title="MyNewFrnd AI Assistant")

st.title("🤖 MyNewFrnd AI City Assistant")
st.write("Ask anything about your new city!")

# simple session memory
if "chat" not in st.session_state:
    st.session_state.chat = []

user_input = st.text_input("You:")

if st.button("Ask"):
    if user_input:
        # Fake AI response (demo-safe)
        response = (
            "Great question! 😊\n\n"
            "Based on your query, I recommend exploring safe neighborhoods, "
            "checking local transport options, and connecting with a CityMate "
            "for personalized guidance."
        )

        st.session_state.chat.append(("You", user_input))
        st.session_state.chat.append(("AI", response))

# display chat
for sender, message in st.session_state.chat:
    if sender == "You":
        st.markdown(f"**🧑 You:** {message}")
    else:
        st.markdown(f"**🤖 AI:** {message}")
